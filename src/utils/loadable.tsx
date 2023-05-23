import Loadable from 'react-loadable'
const withLoadable = (componet: () => Promise<any>) => {
    return Loadable({
        loader: componet,
        loading: () => <div>网络正在加载中</div>
    })
}
export default withLoadable