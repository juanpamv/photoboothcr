import React from "react";
import { Context } from './../containers/Provider';
import PackageOne from './PackageOne';
import PackageTwo from './PackageTwo';
import PackageThree from './PackageThree';
import PackageFour from './PackageFour';

const PackagesGrid = () => (
    <Context.Consumer>
        {(context) => (
            <React.Fragment>
            {
                    context.state.packages.map((service, index) => {
                        if (index === 0){
                            return <PackageOne  service={service} key={index} scrollPositon={context.state.scroll}  />
                        }else if(index === 1){
                            return <PackageTwo  service={service} key={index} scrollPositon={context.state.scroll}  />
                        } else if(index === 2){
                            return <PackageThree  service={service} key={index} scrollPositon={context.state.scroll}  />
                        } else if(index === 3){
                            return <PackageFour  service={service} key={index} scrollPositon={context.state.scroll}  />
                        }
                    })
            }
            </React.Fragment>
        )}
    </Context.Consumer>
)

export default PackagesGrid;