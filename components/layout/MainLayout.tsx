import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

export interface MainLayoutProp {
}

const MainLayout: React.FC<MainLayoutProp> = ({children}) => {
    const [backgroundCss, setBackgroundCss] = useState<string>('from-gray-100 to-gray-400')
    const [icon, setIcon] = useState<IconDefinition>(faSun)
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setBackgroundCss(theme === "dark"
            ? "from-gray-600 to-gray-800"
            : "from-gray-100 to-gray-400")
        setIcon(theme === "dark" ? faSun : faMoon)
    }, [theme])

    return (
        <div
            className={`flex justify-center min-h-screen min-w-screen bg-gradient-to-r ${backgroundCss}`}
        >
            <div className={"max-w-screen-lg w-full p-5"}>
                <div className={"flex w-full justify-between items-center"}>
                    <Link href={"/"}>
                        <div className={"cursor-pointer"}>CJ Jeon</div>
                    </Link>
                    <div className={"flex gap-3"}>
                        {/*<Link href={"/wip"}>*/}
                        {/*    <div className={"cursor-pointer underline uppercase"}>*/}
                        {/*        Personal Info*/}
                        {/*    </div>*/}
                        {/*</Link>*/}
                        {/*<Link href={"/wip"}>*/}
                        {/*    <div className={"cursor-pointer underline uppercase"}>*/}
                        {/*        Projects / Blogs*/}
                        {/*    </div>*/}
                        {/*</Link>*/}
                        {/*<Link href={"/wip"}>*/}
                        {/*    <div className={"cursor-pointer underline uppercase"}>Gears</div>*/}
                        {/*</Link>*/}
                        <div
                            className={"cursor-pointer hover:border-purple-500"}
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <FontAwesomeIcon
                                icon={icon}
                                size={"lg"}
                            />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
