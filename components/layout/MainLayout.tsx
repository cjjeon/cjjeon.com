import {Collapse} from "../transition";
import {ROUTES} from "../../constants/routers";
import {useRouter} from "next/router";


const MainLayout: React.FC = ({children}) => {
    const router = useRouter()

    return (
        <div className={'flex flex-col'}>
            <div className={'absolute top-0 w-full bg-black'}>
                <div className={'flex justify-between items-center px-5 py-2'}>
                    <a href={'/'} className={'text-white no-underline'}>
                        CJ Jeon
                    </a>
                    <div className={'flex gap-3'}>
                        {ROUTES.map((route, index) => {
                            return <a href={route.path} key={index}
                                      className={`${router.asPath === route.path ? 'text-purple-400' : 'text-white'} no-underline`}>
                                {route.title}
                            </a>
                        })}
                    </div>
                </div>
            </div>
            <div className={'w-full h-full bg-cool-picture bg-center bg-cover bg-no-repeat'}>
                <div className={`flex justify-center items-center h-screen`}>
                    <div
                        className={'max-w-md md:max-w-2xl lg:max-w-4xl mt-12'}>
                        <Collapse isOpen={true}
                                  className={'border-2 border-white rounded-2xl backdrop-blur-sm bg-black/40'}>
                            <div className={'overflow-y-scroll p-5 max-h-[90vh]'}>
                                {children}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
