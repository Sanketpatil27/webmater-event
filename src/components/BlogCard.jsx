import { Link } from "react-router-dom"

export default function BlogCard({src, title}) {
    return <div className="flex ml-4 mb-2">
        <div className="mt-14 w-full flex gap-8">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div
                    class="relative h-56 mx-4 mt-2 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img
                        src={src}
                        alt="card-image" />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        The place is close to Barceloneta Beach and bus stop just 2 min by walk
                        and near to "Naviglio" where you can enjoy the main night life in
                        Barcelona.
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <Link to={"/FullBlog"}>
                        <button
                            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}