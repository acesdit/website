import { ImageResponse } from "next/server";

export const runtime = 'edge'

/**
 * Fetches the Oswald-SemiBold font from the public folder of the Vercel app.
 * @returns {Promise<ArrayBuffer>} The font data as an array buffer.
 */
const getFont = async () => {
    const response = await fetch(
        new URL('/oswald.ttf', 'https://acesdit.vercel.app')
    );
    const fontSemiBold = await response.arrayBuffer();
    return fontSemiBold;
}

/**
 * Generates an OpenGraph image for a blog post.
 * @param {Request} request The request object.
 * @returns {Response} The OpenGraph image response.
 */
export async function GET(request) {
    const { searchParams, host, protocol } = new URL(request.url)
    const title = searchParams.get('title')
    const cover = `${protocol}//${host}/images/blogbg.jpg`
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 52,
                    className: 'text-primary',
                    backgroundImage: `url(${cover})`,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    color: 'white',
                    textTransform: 'uppercase',
                    padding: '80px'
                }}
            >
                <h1 style={{ margin: 0, padding: 0, lineHeight: 1 }}>{title}</h1>
            </div>
        ),
        {
            width: 1200,
            height: 750,
            fonts: [
                {
                    name: 'Oswald',
                    data: await getFont(),
                    style: 'semi-bold'
                }
            ]
        }
    )
}