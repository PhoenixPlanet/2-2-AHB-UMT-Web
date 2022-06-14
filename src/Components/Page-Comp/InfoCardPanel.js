import React from "react";
import styled from "styled-components"

import InfoCard from '../Page-Comp/InfoCard'
import Gap from '../UI/Gap'
import ContentWrapper from '../UI/ContentWrapper'
import Button from '../UI/Button'

import { IoCall, IoMail } from "react-icons/io5"

import Contacts from '../../data/Contacts'

const StyledInfoCardPanelDiv = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`

function InfoCardPanel(props) {
	const infoCards = Contacts.map((contact, index) => {
		const title = contact.name;
		
		const details = contact.detail.map((detail, index) => {
			return (
				<ContentWrapper key={index}>
					<b>{detail.tag}</b>
					<br/>
					{detail.content}
					<Gap></Gap>
				</ContentWrapper>
			);
		});
		
		const content = (
			<ContentWrapper>
				{contact.about}
				<Gap></Gap>
				{details}
			</ContentWrapper>
		);
		
		const actions = [
			contact.mail && <Button key="mail" onClickEvent={() => window.location.href = `mailto:${contact.mail}`}> <IoMail/> </Button>,
			contact.tel && <Button key="tel" onClickEvent={() => window.location.href = `tel:${contact.tel}`}> <IoCall/> </Button>
		]
		
		return <InfoCard key={index} title={title} content={content} image={contact.image} actions={actions}></InfoCard>
	});
	
    return (
        <StyledInfoCardPanelDiv>
			{infoCards}
        </StyledInfoCardPanelDiv>
    );
}

export default InfoCardPanel;