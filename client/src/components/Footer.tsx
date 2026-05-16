export default function Footer() {
    const currentDate : Date = new Date();
    const currentYear : number = currentDate.getFullYear();

    return <footer className="flex justify-center p-4">
        <p className="text-xs dark:text-gray-100 md:text-base">{currentYear} AnLaxina</p>
    </footer>
}