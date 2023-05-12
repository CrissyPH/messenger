import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getRSCModuleInformation } from "next/dist/build/analysis/get-page-static-info";

export default async function getSession() {
    return await getServerSession(authOptions)
}