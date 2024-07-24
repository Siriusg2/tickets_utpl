"use client"; // Añade esta línea al principio del archivo

import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import SelectIndex from "./selectIndex";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function AdminIndex() {
    const [checkedItems, setCheckedItems] = useState<Number[]>([0]);
    const [allChecked, setAllChecked] = useState(false);

    const data = [
        { id: 1, description: 'Gibson no me para de dar formularios', status: 'En progreso', priority: 'Alta', user: 'Lautaro' },
        { id: 2, description: 'Se averio la impresora', status: 'Incompleta', priority: 'Baja', user: 'Ppacheco' }
    ];

    const handleCheck = (id:number) => {
        setCheckedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleCheckAll = () => {
        if (allChecked) {
            setCheckedItems([0]);
        } else {
            setCheckedItems(data.map((item) => item.id));
        }
        setAllChecked(!allChecked);
    };

    return (
        <div className="p-8">
            <div className="flex gap-8">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Buscar" />
                    <Button type="submit">Buscar</Button>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <Checkbox
                                checked={allChecked}
                                onCheckedChange={handleCheckAll}
                            />
                        </TableHead>
                        <TableHead>Descripcion</TableHead>
                        <TableHead className="w-[200px]">Estado</TableHead>
                        <TableHead className="w-[200px]">Prioridad</TableHead>
                        <TableHead className="text-right">Usuario</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.id}
                            className={checkedItems.includes(item.id) ? `bg-[#063c80] hover:bg-[#063c80]/[0.7] text-white ` : ' hover:bg-[#063c80]/[0.7] hover:text-white'}
                        >
                            <TableCell>
                                <Checkbox
                                    checked={checkedItems.includes(item.id)}
                                    onCheckedChange={() => handleCheck(item.id)}
                                />
                            </TableCell>
                            <TableCell className="font-medium">{item.description}</TableCell>
                            <TableCell className={checkedItems.includes(item.id) ? 'font-medium ' : ''}>{item.status}</TableCell>
                            <TableCell className={checkedItems.includes(item.id) ? 'font-medium ' : ''}>{item.priority}</TableCell>
                            <TableCell className={checkedItems.includes(item.id) ? 'font-medium text-right ' : "text-right "} >{item.user}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}


