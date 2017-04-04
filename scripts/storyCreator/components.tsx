import * as React from 'react';

export class StoryBoard extends React.Component<any, any> {

    constructor() {
        super();
        this.state = {
            renderComponent: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    selectedComponent: any;

    handleClick(item: any) {
        this.selectedComponent = item.component;
        this.setState({renderComponent: true});
    }

    render() {
        const {stories} = this.props;

        const leftNavItems: any = stories.map((story: any) => {
            const storyItems = story._getStoryItems();            
            return <LeftNavItem storyItems={storyItems} handleClick={this.handleClick}/>
        });

        return (<div>
            <div className="left-nav">
                {leftNavItems}
            </div>
            <div className="content">
                {this.state.renderComponent && this.selectedComponent}
            </div>
        </div>);
    }
}


const LeftNavItem = ({storyItems, handleClick}: any) => {

    const rendered =  Object.keys(storyItems).map((key: string) => {
        return <div>
            <h3>{key}</h3>
            {
                storyItems[key].map((item: any) => <div>
                    <span onClick={() => handleClick(item)}>{item.description}</span>
                </div>)
            }
        </div>
    });

    return <div className="left-nav-item">
        {rendered}
    </div>
}