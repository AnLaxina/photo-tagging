interface HeaderProps {
    children: React.ReactNode
}

export default function Header({children} : HeaderProps) {
    return <header className="flex justify-center p-6">
        <h1 className="text-2xl font-semibold dark:text-white md:text-3xl">{children}</h1>
        
    </header>
}