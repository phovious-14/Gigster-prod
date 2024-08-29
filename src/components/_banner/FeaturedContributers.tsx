"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function FeaturedContributers() {
    return (
        <div id="feature-gigs" className='w-screen h-[70vh] flex justify-center items-center flex-col mb-24 -mt-[200px]' >
            <h1 className='text-3xl text-slate-800 text-center mb-16'>Featured Gigs</h1>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-[400px] border-2 rounded-lg border-slate-900 bg-slate-100 h-auto p-4">
                            <h1 className="text-slate-800 text-xl my-2">Aptos Twitter Thread</h1>
                            <h2 className="text-slate-600 text-base my-2 mb-4">by - Aptos</h2>
                            <div className="w-full bg-slate-200 rounded-lg p-2 flex justify-center items-center my-2">
                                <Image className="rounded " src={'data:image/png;base64,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'} alt="" width={50} height={50} />
                            </div>
                            <h1 className="text-slate-900 text-2xl text-center mt-6 mb-4">100 APT</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-[400px] border-2 rounded-lg border-slate-900 bg-slate-100 h-auto p-4">
                            <h1 className="text-slate-800 text-xl my-2">Aptos Cellana Thread</h1>
                            <h2 className="text-slate-600 text-base my-2 mb-4">by - Aptos</h2>
                            <div className="w-full bg-slate-200 rounded-lg p-2 flex justify-center items-center my-2">
                                <Image className="rounded " src={'data:image/png;base64,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'} alt="" width={50} height={50} />
                            </div>
                            <h1 className="text-slate-900 text-2xl text-center mt-6 mb-4">50 APT</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                        <div className="w-[400px] border-2 rounded-lg border-slate-900 bg-slate-100 h-auto p-4">
                            <h1 className="text-slate-800 text-xl my-2">Aptos Stan Thread</h1>
                            <h2 className="text-slate-600 text-base my-2 mb-4">by - Aptos</h2>
                            <div className="w-full bg-slate-200 rounded-lg p-2 flex justify-center items-center my-2">
                                <Image className="rounded " src={'data:image/png;base64,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'} alt="" width={50} height={50} />
                            </div>
                            <h1 className="text-slate-900 text-2xl text-center mt-6 mb-4">200 APT</h1>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}