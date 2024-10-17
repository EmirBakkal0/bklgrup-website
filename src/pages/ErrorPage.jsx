import { useRouteError, Link } from "react-router-dom";
import Cat404 from "/404.jpg"

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex  items-center flex-col text-lg h-svh bg-black text-white" >
            <img src={Cat404} alt="404 error" width={500}  />
            <h1 className="font-bold text-xl p-2">Oops!</h1>
            <p className="p-2">Beklenmeyen bir hata oluştu!</p>
            <Link  to="/" >
                <button className="p-2 shadow-lg border-solid bg-red-900 rounded-md border-deep-purple-800">
                    Anasayfaya geri dön.

                </button>
            </Link>
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </div>
    );
}