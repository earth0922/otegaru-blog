const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="border bg-gray-100 rounded-xl max-w-[80%] mx-auto w-full my-8 border-gray-400">
                {children}
            </div>
        </div>
    );
};
export default Layout;
