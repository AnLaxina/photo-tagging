export default function Footer() {
    const currentDate : Date = new Date();
    const currentYear : number = currentDate.getFullYear();

    return <footer>
        <p>{currentYear} AnLaxina</p>
    </footer>
}