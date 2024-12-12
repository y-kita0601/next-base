// app/api/revalidate/route.js
import { revalidatePath } from "next/cache";

export async function POST(req) {
    const secret = process.env.REVALIDATE_SECRET; // 環境変数でシークレットキーを設定
    const body = await req.json();

    if (body.secret !== secret) {
        return new Response(JSON.stringify({ message: "Invalid secret" }), { status: 401 });
    }

    try {
        // 再生成したいパスを指定
        revalidatePath("/");
        return new Response(JSON.stringify({ revalidated: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error revalidating", error: error.message }), {
            status: 500,
        });
    }
}
