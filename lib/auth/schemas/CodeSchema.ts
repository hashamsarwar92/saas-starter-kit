import { z } from 'zod'
import { codeField } from '@/lib/auth/schemas/SchemaFields'

export const CodeSchema = z.object({
    code: codeField
})

export type CodeSchemaType = z.infer<typeof CodeSchema>;
