

export default function setString (str: string) {
    localStorage.setItem('search', str.trimEnd());
}