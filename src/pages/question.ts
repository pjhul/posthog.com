import { createClient } from '@supabase/supabase-js'
import type { GetServerData } from 'gatsby'

import Question from '../components/Question'

export default Question

export const getServerData: GetServerData<{ id: string | undefined }> = async (req) => {
    try {
        return {
            props: { id: req?.params?.id as string | undefined },
        }
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: { id: undefined },
        }
    }
}
