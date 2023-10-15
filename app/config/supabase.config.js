const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://zgcgkizkfhatmwkijhpw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnY2draXprZmhhdG13a2lqaHB3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjcwODgzMCwiZXhwIjoyMDEyMjg0ODMwfQ.qm_gtq-yFfFzyjNMkObrgKcYxQPdUhNAJle62fNl_3A',
    { timeout: 15000, });

module.exports = supabase;
