//! WITH PRISMA-ORM
import { PrismaClient } from '@prisma/client';
export class UserRepository {

    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient()
    }

    public async getAll(): Promise<any> {
        return this.prisma.user.findMany({
            include: {
                phoneNumbers: true
            }
        })
    }
}


//! WITH SUPABASE_JS
// import { SupabaseClient, createClient } from '@supabase/supabase-js'
// export class UserRepository {

//     private supabase: SupabaseClient;

//     constructor() {
//         const key = process.env.SUPABASE_PRIVATE_KEY
//         const url = process.env.SUPABASE_URL
//         let supabase;
//         if (key && url)
//             supabase = createClient(url, key)
//         if (!key || !url || !supabase)
//             throw new Error('SUPABASE ERROR')
//         this.supabase = supabase
//     }

//     public async getAll(): Promise<any> {
//         const { data, error } = await this.supabase.from('User').select('*, PhoneNumber(*)')
//         if (error) {
//             throw error
//         }
//         return data
//     }
// }

