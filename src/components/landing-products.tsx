import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

function LandingProducts() {
    return (
        <div className="my-10 ">
            <h2 className="text-center text-4xl text-black dark:text-white font-extrabold mb-10">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">

                <Card key="1" className="dark:bg-[#192339] border-2 text-white">
                    <CardHeader>
                        <CardTitle className="  items-center gap-x-2">
                            <div>
                                <div className="flex justify-center">
                                    <div className="relative h-8 w-8 mr-4">
                                        <Image fill alt="Logo" src="/genius.png" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        Genius
                                    </h1>
                                </div>
                                <p className="text-zinc-400 text-lg text-center ">Content Generation Tool</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-2 text-center text-gray-600 dark:text-white ">
                            <p>GENIUS offers a seamless and intuitive experience, allowing users to easily navigate the available AI tools, customize settings, and refine their outputs. The platform also provides educational resources and guidance to help users get the most out of the AI generation capabilities.</p>
                        </CardContent>
                    </CardHeader>
                    <Link href="http://localhost:3001/">
                        <CardFooter className='w-full '>
                            <Button className="w-full "> Visit Now
                            </Button>
                        </CardFooter>
                    </Link>
                </Card>


                <Card key="2" className="dark:bg-[#192339] border-2 text-white">
                    <CardHeader>
                        <CardTitle className=" items-center gap-x-2">
                            <div>
                            <div className="flex justify-center">
                                    <div className="relative h-9 w-10 mr-4 ">
                                        <Image fill alt="Logo" src="/logo.png" />
                                    </div>
                                    <h1 className="text-2xl font-bold text-black dark:text-white">
                                        GenED
                                    </h1>
                                </div>
                                <p className="text-zinc-400 text-lg text-center">Course Generation Tool</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-2 text-center text-gray-600 dark:text-white ">
                            <p>GenED - the revolutionary platform that harnesses the power of artificial intelligence to create customized educational experiences. GenED is designed to empower learners, educators, and institutions by offering a seamless and personalized approach to course content generation..</p>
                        </CardContent>
                    </CardHeader>
                    <Link href="http://localhost:3000/gallery">
                        <CardFooter className='w-full '>
                            <Button className="w-full "> Get Started
                            </Button>
                        </CardFooter>
                    </Link>
                </Card>
            </div>
        </div>
    )
}

export default LandingProducts