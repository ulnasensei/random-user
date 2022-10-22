import React from "react";
import { Columns, Image, Heading, Block } from "react-bulma-components";
import "./Users.css";

const User = ({ user }) => {
    const {
        name: { title, first: firstName, last: lastName },
        location: { city, country },
        email,
        dob: { age },
        registered: { date },
        phone,
        picture: { large: avatar },
    } = user;
    const regDate = new Date(date).toLocaleDateString();
    return (
        <>
            <Columns className="box-header" centered display="flex" vCentered>
                <Columns.Column size={"one-quarter"}>
                    <Image src={avatar} alt="avatar" rounded size={128} />
                </Columns.Column>
                <Columns.Column size={"three-quarters"} textAlign={"center"}>
                    <Heading>
                        {title}. {firstName} {lastName}
                    </Heading>
                </Columns.Column>
            </Columns>
            <Block>
                <Heading subtitle>
                    <a href={`mailto:${email}`}>{email}</a>
                </Heading>
            </Block>
            <Block>
                <Heading subtitle>
                    <a href={`tel:${phone}`}>{phone}</a>
                </Heading>
            </Block>
            <Block>
                <Heading subtitle>
                    {city} - {country}
                </Heading>
            </Block>
            <Block>
                <Heading subtitle>{age} years old</Heading>
            </Block>
            <Block>
                <Heading subtitle>{regDate}</Heading>
            </Block>
        </>
    );
};

export default User;
