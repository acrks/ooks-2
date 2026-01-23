"use client";

import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/ui/combobox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CompanyUser, selectedUsers } from "../actions";
import * as React from "react";

export default function NewGroupForm({ users }: { users: CompanyUser[] }) {
    const { data: session } = useSession();

    const usersToChoose = users.map((user) => ({
        value: user.id,
        label: user.name || user.email || "Unnamed User",
    }));

    const [selectedUsers, setSelectedUsers] = useState<
        {
            value: string;
            label: string;
        }[]
    >([]);

    return (
        <div>
            <h1>Create a New Group</h1>
            <div className="flex flex-row">
                <form className="flex flex-col gap-4">
                    <label>
                        Group Name:
                        <input type="text" name="groupName" required />
                    </label>
                    <div>
                        <label>Members:</label>
                        {/* Do a map here to render all members of a company */}
                        <div>
                            <select
                                multiple
                                name="members"
                                onChange={(e) => {
                                    const selected = Array.from(
                                        e.target.selectedOptions,
                                    ).map((option) => ({
                                        value: option.value,
                                        label: option.text,
                                    }));
                                    setSelectedUsers([...selected]);
                                }}
                                required
                            >
                                {users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.name
                                            ? "Name: " +
                                              user.name +
                                              " Email: " +
                                              user.email
                                            : "Email: " + user.email}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <h2>Selected Users:</h2>
                            <ul>
                                {selectedUsers.map((user) => (
                                    <li key={user.value}>{user.label}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <Button type="submit">Create Group</Button>
                </form>
            </div>
        </div>
    );
}
