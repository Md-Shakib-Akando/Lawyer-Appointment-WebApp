import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
const Blogs = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center ">
                    <ScaleLoader
                        barCount={4}
                        height={40}
                        width={6}
                        color="black"
                    />
                </div>
            ) : (
                <div className="text-center mt-20">
                    <h1 className="text-3xl font-bold">This is Blog</h1>
                </div>
            )}
        </>
    );
};

export default Blogs;