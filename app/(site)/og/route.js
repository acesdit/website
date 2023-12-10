import {ImageResponse} from "next/server";

export const runtime = 'edge'

const getFont = async () => {
    // const myUrl= new URL('../../../public/Oswald-Semibold.ttf', import.meta.url)
    // console.log(myUrl.href)
    const response = await fetch(
        // new URL('../../../public/Oswald-Semibold.ttf', import.meta.url)
        new URL('/oswald.ttf', 'https://acesdit-alpha.vercel.app')
    );
    // const response = await fetch(`${protocol}//${host}/Oswald-SemiBold.ttf`)
    // const response = await fetch(`http://localhost:3000/Oswald-SemiBold.ttf`)
    const fontSemiBold = await response.arrayBuffer();
    return fontSemiBold;
}

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
                <h1 style={{margin: 0, padding: 0, lineHeight: 1}}>{title}</h1>
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