import React from 'react';
import "./style.css";
class Breadcrumb extends React.Component{
	renderListBreadcrumItem = (values) => {
		const list = values.map((value, key) => {
			let item;
			if (key === values.length - 1) {
				item = (
					<li key={key} className={key === values.length ? 'active' : ''}>
						<span>
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							{value.label}
						</span>
					</li>
				)
			} else if (key > 0) {
				item = (
					<li key={key} className={key === values.length ? 'active' : ''}>
						<a href={value.link}>
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							{value.label}
						</a>
					</li>
				)
			} else {
				item = (<li key={key} className={key === values.length ? 'active' : ''}>
				<a href={value.link}>{value.label}</a>
				</li>);
			}

			return item;
		});
		return list;
	}
    render(){
		const {values} = this.props;
        return(
            <div className="breadcrumbs d-flex flex-row align-items-center">
				<ul>
					{this.renderListBreadcrumItem(values)}
				</ul>
			</div>
        )
    }
}

export default Breadcrumb;
