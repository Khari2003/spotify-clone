"use client"

import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { useState } from "react"
import { createClient } from '@supabase/supabase-js'

interface SupabaseProviderProps {
    children: React.ReactNode
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ 
    children 
}) => {
    const [supabaseClient, setSupabaseClient] = useState(()=>{
        return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    })

    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

export default SupabaseProvider