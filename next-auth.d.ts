//this is the file that will be used to define the types for the next-auth module

import type { Session, User } from "next-auth";
import type {JWT} from "next-auth/jwt";
// import type { Adapter } from "next-auth/adapters";
// import type { AdapterUser, AdapterSession } from "@auth/prisma-adapter";

declare module "next-auth" {
    interface Session extends Session {
        user: User & {
            id: string;
            name: string;
            email: string;
            image: string;
            username?: string;
        };
    }

    interface User extends User {
        id: string;
        name: string;
        email: string;
        image: string;
        username?: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends JWT {
        id: string;
        name: string;
        email: string;
        image: string;
        username?: string;
    }
}

// declare module "next-auth/adapters" {
//     interface Adapter extends Adapter {
//         getUser: (id: string) => Promise<AdapterUser | null>;
//         getSessionAndUser: (sessionToken: string) => Promise<{
//             session: AdapterSession;
//             user: AdapterUser;
//         } | null>;
//         // Extend or override other methods if needed
//     }
// }