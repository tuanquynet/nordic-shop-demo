import React from 'react';
import "./style.css";
class PerPageDropDown extends React.Component{
	renderPageSelection = (max) => {
		if (!max || max <= 0) {
			return null;
		}
		const elements = Array(max).map((index) => {
			return (<li>
				<a onClick={this.onClickPageNumHandler}
					data-id={index}>{index}
				</a>
			</li>)
		});
		return elements.length
			? <ul className="page_selection">{elements}</ul>
			: null;
	}

	onClickPageNumHandler = (e) => {
		if (!this.props.onChangePageNum) {
			return;
		}
		e.preventDefault();
		this.props.onChangePageNum(e.target.getAttribute('data-id'));
	}

	onClickNextHandler = (e) => {
		console.log('onClickNextHandler');
		if (!this.props.onChangePageNum) {
			return;
		}
		console.log('onClickNextHandler');
		e.preventDefault();
		const {totalPage, selectedPageNum} = this.props;
		const pageNum = Math.min(selectedPageNum + 1, totalPage);
		this.props.onChangePageNum(pageNum);
	}

    render(){
		const {totalPage, selectedPageNum} = this.props;

        return(
            <div className="pages d-flex flex-row align-items-center">
				<div className="page_current">
					<span>{selectedPageNum}</span>
					{this.renderPageSelection(totalPage)}
				</div>
				<div className="page_total">
					<span>of</span> {totalPage}
				</div>
				<div id="next_page"
					className="page_next">
					<a onClick={this.onClickNextHandler}>
						<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
					</a>
				</div>
			</div>
        )
    }
}

export default PerPageDropDown;
