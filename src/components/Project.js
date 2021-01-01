import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers";
import formatDate from "date-fns/format";
import getCssClasses from "classnames";
import Tag from "./Tag";

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHoveredOver: false,
		};
	}

	setIsHoveredOver(isHoveredOver) {
		this.setState({ isHoveredOver });
	}

	displayStars() {
		const rating = this.props.project.rating;
		let stars = [];
		for (let i = 0; i < rating; i++) {
			stars = stars.concat(
				<img src={starIcon} width="16px" alt="Star icon" key={i} />
			);
		}
		return stars;
	}

	render() {
		return (
			<div className="row mb-5">
				<div
					className="col-12 mb-2"
					onMouseEnter={() => {
						this.setIsHoveredOver(true);
					}}
					onMouseLeave={() => {
						this.setIsHoveredOver(false);
					}}
				>
					<a
						href={this.props.project.youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={getCssClasses("text-reset text-decoration-none", {
							"text-underline": this.state.isHoveredOver,
						})}
					>
						<h2 className="font-weight-normal text-secondary">
							{this.props.project.title}
						</h2>
					</a>
				</div>
				<div
					className="col-12 col-md-4"
					onMouseEnter={() => {
						this.setIsHoveredOver(true);
					}}
					onMouseLeave={() => {
						this.setIsHoveredOver(false);
					}}
				>
					<a
						href={this.props.project.youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={require("../image/" + this.props.project.image)}
							width="510px"
							className="img-fluid"
							alt={this.props.project.title}
						/>
					</a>
				</div>
				<div className="col-12 col-md-8 mt-3 mt-md-n1">
					<a
						href={this.props.project.youtubeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none text-reset"
						onMouseEnter={() => {
							this.setIsHoveredOver(true);
						}}
						onMouseLeave={() => {
							this.setIsHoveredOver(false);
						}}
					>
						<p>
							{this.displayStars()}
							<span className="ml-2">
								{this.props.project.desc} ({this.props.project.totalMinutes}{" "}
								min.)
							</span>
						</p>
						<p>{formatDate(this.props.project.postedAt, "MMM. d, yyyy")}</p>
						<div className="tags">
							{this.props.project.tags.map((tag, index) => {
								return <Tag tag={tag} key={index} />;
							})}
						</div>
					</a>

					{this.props.isAdvanced && (
						<a
							href={this.props.project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkIcon} width="16px" className="mr-2" alt="" />
							{truncate(this.props.project.githubUrl, 33)}
						</a>
					)}
				</div>
			</div>
		);
	}
}
