import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            image: any
            id:         string
            name:       string
            email:      string    
            userImage:  string
            tipo:       string
            status:     string 
        }
     }
}
