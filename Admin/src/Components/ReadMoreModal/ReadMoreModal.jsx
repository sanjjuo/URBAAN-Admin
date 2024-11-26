import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

export function ReadMoreModal({ handleOpen, open }) {

    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                size={"xs"}
                animate={{
                    mount: { x: 0, y: 0 }, // Center position
                    unmount: { x: 100, y: 0 }, // Move off to the right
                }}

                className="fixed right-0 pt-10 px-3"
            >
                <DialogBody className="flex flex-col justify-center items-center space-y-4">
                    <div className="w-40 h-40">
                        <img
                            src="/p1.jpg"
                            alt=""
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h1 className="text-base font-semibold text-secondary mb-2">
                                Description
                            </h1>
                            <p className="text-sm leading-relaxed">
                                For science, music, sport, etc, Europe uses the same vocabulary.
                                The languages only differ in their grammar, their pronunciation,
                                and their most common words.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-base font-semibold text-secondary mb-2">
                                Sub Categories
                            </h2>
                            <ul className="list-disc px-5 text-sm space-y-3 capitalize">
                                <li>pants</li>
                                <li>leggings</li>
                                <li>pallazo</li>
                                <li>jeans</li>
                            </ul>
                        </div>
                    </div>
                </DialogBody>
                <DialogFooter className="flex justify-center items-center gap-1">
                    <Button
                        onClick={handleOpen}
                        className="w-40 bg-buttonBg text-white font-custom capitalize tracking-wider"
                    >
                        <span>edit</span>
                    </Button>
                    <Button
                        onClick={handleOpen}
                        className="w-40 bg-primary/20 text-primary font-custom capitalize tracking-wider shadow-none hover:shadow-none"
                    >
                        <span>delete</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}