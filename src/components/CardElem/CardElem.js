import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardHeader,
	CardActions,
	CardContent,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	card: {
		// minWidth: 175,
		textDecoration: 'none',
		margin: theme.spacing(1),
		borderRadius: "0px"
	},
	link: {
		textDecoration: 'none'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 23,
		// color: 'blue'
	},
	pos: {
		marginBottom: 12,
	},
	badge: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const CardElem = ({
	title,
	subtitle,
	elevation,
	children,
	card
}) => {
	const classes = useStyles();
	return (
		<Card
			className={card ? card : classes.card}
			elevation={(elevation || elevation === 0) ? elevation : 3}
		>
			<CardHeader
				title={<div className={classes.title}>{title}</div>}
				subheader={subtitle}
			/>
			<CardContent>
				{children}
			</CardContent>
			<CardActions>
			</CardActions>
		</Card>
	);
};

export default CardElem;
