export type FooterProps = {
    title: string
    subMenuItems?: {
        title: string
        path: string
    } []
}

export type FooterItemsWithSubmenuProps = {
    item: FooterProps
    toggleOpen: () => void
}

export type HeroSectionListProps = {
    children: React.ReactNode
    image: string
    variant: "black" | "white" | "blue"
    text: "black" | "white" | "blue"
    price: string
    list1?: string
    list2?: string
    list3?: string
}