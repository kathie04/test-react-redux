export default async function fetchList (url : string) : Promise<[]> {
    const response = await fetch(url);
    return await response.json()
}

