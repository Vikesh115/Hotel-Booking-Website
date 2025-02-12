import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);


    return (
        <>
        <div className=" pt-2 pl-4 p-4  ">
            {pathnames.length > 0 && (
                <>
                    <Link to="/">Home</Link>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <span key={name}>
                &nbsp;{">"}&nbsp;
                                {isLast ? (
                                    name
                                ) : (
                                    <Link to={routeTo}>{name}</Link>
                                )}
                            </span>
                        );
                    })}
                </>
            ) }
        </div>
        </>
    );
}

export default Breadcrumb;