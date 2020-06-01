var mang
function themDiv() {
    ReactDOM.render(
        <DauvaoDiv />, document.getElementById("div-them")
    )
}
class DoTQ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onSua: false
        }
        this.dotqRef = React.createRef()
    }
    sua() {
        this.setState({ onSua: true })
    }
    huy() {
        this.setState({ onSua: false })
    }
    luu() {
        var that = this
        $.post("/luuServer", { idLuu: this.props.idDoTQ, noidungLuu: this.dotqRef.current.value }, function (data) {
            mang.setState({ mangstring: data })
            that.setState({ onSua: false })
        })
    }
    xoa() {
        $.post("/xoaServer", { idXoa: this.props.idDoTQ }, function (data) {
            mang.setState({ mangstring: data })
        })
    }
    render() {
        if (this.state.onSua) {
            return (
                <div>
                    <input defaultValue={this.props.children} ref={this.dotqRef} ></input>
                    <button onClick={() => this.luu()} >Lưu</button>
                    <button onClick={() => this.huy()} >Hủy</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p>{this.props.children}</p>
                    <button onClick={() => this.xoa()} >Xóa</button>
                    <button onClick={() => this.sua()} >Sửa</button>
                </div>
            )
        }
    }
}
class DauvaoDiv extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    hamSend() {
        if (this.myRef.current.value != "") {
            $.post(
                "/addDivThemServer", { serverNDN: this.myRef.current.value }, function (data) {
                    mang.setState({ mangstring: data })
                }
            )
            ReactDOM.unmountComponentAtNode(document.getElementById("div-them"))
        } else {
            alert("Không được để blank!!!")
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} placeholder="input tên mới..." ></input>
                <button onClick={() => this.hamSend()}>Gửi</button>
                <hr />
            </div>
        )
    }
}
class Mang extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mangstring: []
        }
        mang = this
    }
    componentDidMount() {
        var that = this
        $.post(
            "/getMangServer", function (data) {
                that.setState({ mangstring: data })
            }
        )
    }
    render() {
        return (
            <div>
                <div id="div-them" />
                <button onClick={themDiv} >Thêm</button>
                {
                    this.state.mangstring.map((noidungnote, chiso) => {
                        return <DoTQ key={chiso} idDoTQ={chiso}>{noidungnote}</DoTQ>
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(<Mang />, document.getElementById("root"))