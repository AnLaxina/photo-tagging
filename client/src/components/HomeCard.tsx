interface HomeCardProps {
    imagePath: string,
    imageAlt: string | undefined,
    children: React.ReactNode
}

export default function HomeCard({imagePath,imageAlt, children} : HomeCardProps) {
    return(
        <article className="p-6 rounded-md bg-gray-200 dark:bg-gray-700 ">
            <img src={imagePath} alt={imageAlt} />
            <h3 className="font-medium text-lg">{children}</h3>
        </article>
    )
}