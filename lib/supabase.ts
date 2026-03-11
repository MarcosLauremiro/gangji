import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://togllpopeyvylewhsufz.supabase.co/auth/v1/callback'
const supabaseAnonKey = 'sb_publishable_1daqCNjgIGIKmrzgeozBFA_Jbv-JFlO'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)