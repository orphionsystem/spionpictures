/**
 * Database Setup Script
 * This script uploads the schema to Supabase
 */

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n')

  try {
    // Read schema file
    const schemaPath = path.join(__dirname, 'database', 'schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('📄 Schema file loaded')
    console.log(`📊 File size: ${(schema.length / 1024).toFixed(2)} KB\n`)

    // Split schema into individual statements
    const statements = schema
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'))

    console.log(`📝 Found ${statements.length} SQL statements\n`)

    // Execute each statement
    let successCount = 0
    let errorCount = 0

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i] + ';'
      
      // Skip comments
      if (statement.trim().startsWith('--')) continue

      try {
        const { error } = await supabase.rpc('exec_sql', { sql: statement })
        
        if (error && !error.message.includes('already exists')) {
          console.log(`⚠️  Statement ${i + 1}: ${error.message}`)
          errorCount++
        } else {
          successCount++
          process.stdout.write(`✅ Executed ${successCount}/${statements.length} statements\r`)
        }
      } catch (err) {
        console.log(`\n❌ Error in statement ${i + 1}:`, err.message)
        errorCount++
      }
    }

    console.log('\n')
    console.log('═══════════════════════════════════════')
    console.log('✅ Database setup completed!')
    console.log(`   Success: ${successCount}`)
    console.log(`   Errors: ${errorCount}`)
    console.log('═══════════════════════════════════════\n')

    // Verify tables were created
    console.log('🔍 Verifying tables...\n')
    
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')

    if (tablesError) {
      console.log('⚠️  Could not verify tables:', tablesError.message)
    } else {
      console.log('📋 Created tables:')
      tables.forEach(t => console.log(`   • ${t.table_name}`))
    }

    console.log('\n✨ Setup complete! You can now run: npm run dev\n')

  } catch (error) {
    console.error('❌ Setup failed:', error.message)
    process.exit(1)
  }
}

setupDatabase()
