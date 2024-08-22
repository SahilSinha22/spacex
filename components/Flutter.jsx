import Image from 'next/image'
import React from 'react'

const Flutter = () => {
    return (
        <div>
            <div class="max-w-7xl items-center text-center mx-auto px-10 py-28  ">
                <h1 class="text-6xl leading-tight font-bold playfair_displays mb-4">Flutter App Development Company Helps You Build Applications for Multiple Screens!</h1>
                <p class="text-3xl  text-muted-foreground mb-8">Introducing big waves in modern cross-platform app development, Flutter tech <br /> builds exquisite, high-performing, and flawless mobile apps.</p>

            </div>
            <div class="flex flex-wrap justify-center gap-4">
                <video
                    autoPlay
                    muted
                    loop
                    className="inset-0  object-cover"
                >
                    <source src="/Intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div class="max-w-6xl mx-auto  ">
                <h1 class="text-4xl font-bold text-primary mb-4">Introduction to <span class="text-blue-500">Flutter</span></h1>
                <p class="text-muted-foreground mb-4">
                    Initially released by Google in 2017, it is an app framework rapidly amplified with yearly improvements and alterations. The tech is well-known for providing charismatic, distinctive, and natively
                    compiled applications supporting desktop, mobile, and cloud-based platform development. Furthermore, with robust graphics and animation libraries, the Flutter framework ensures easy building UIs
                    that respond fluently.
                </p>
                <p class="text-muted-foreground mb-4">
                    But how to get started working with the framework? Space to Tech - a CMMI Level 3 and top-notch flutter mobile application development company, is the way to go! We are a team of technocrats that
                    will help you reach a wider audience by building an app for multiple platforms.
                </p>
                <p class="text-muted-foreground">The organization has weaved over 900 highly successful mobile apps and has helped businesses generate high revenue.</p>
            </div>
        </div>
    )
}

export default Flutter
