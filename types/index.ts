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

export type ButtonProps = {
    children: React.ReactNode;
    variant?: "blue" | "black" | "white" | "outline" | "outlineWhite";
    className?: string 
  };

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

export type ReviewComponentProps = {
    children: React.ReactNode;
    name: string;
    job: string;
    variant?: "white" | "blue" 
  };