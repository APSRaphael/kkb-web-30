import React, { Component, useEffect } from 'react';
// import Form, {Field} from "rc-field-form";
import Form, { Field } from '../components/my-rc-field-form/';
import Input from '../components/Input';

const nameRules = { required: true, message: '请输入姓名！' };
const passwordRules = { required: true, message: '请输入密码！' };

export default function MyRCFieldForm(props) {
	const [form] = Form.useForm();

	const onFinish = (val) => {
		console.log('onFinish', val); //sy-log
	};

	// 表单校验失败执行
	const onFinishFailed = (val) => {
		console.log('onFinishFailed', val); //sy-log
	};

	useEffect(() => {
		// console.log("form", form); //sy-log
		form.setFieldsValue({ username: 'default22' });
	}, []);

	return (
		<div>
			<h3>MyRCFieldForm</h3>
			<Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
				<Field name='username' rules={[nameRules]}>
					<Input placeholder='input UR Username' />
				</Field>
				<Field name='password' rules={[passwordRules]}>
					<Input placeholder='input UR Password' />
				</Field>
				<button>Submit</button>
			</Form>
		</div>
	);
}

// export default class MyRCFieldForm extends Component {
// 	formRef = React.createRef();

// 	componentDidMount() {
// 		// 设置值的方法是通过子组件添加的，这里的类组件获取不到 form
// 		this.formRef.current.setFieldsValue({ username: 'default11' });
// 	}

// 	onFinish = (val) => {};
// 	onFinishFailed = (val) => {};
// 	render() {
// 		return (
// 			<div>
// 				<h3>MyRCFieldForm</h3>
// 				<Form
// 					ref={this.formRef}
// 					onFinish={this.onFinish}
// 					onFinishFailed={this.onFinishFailed}>
// 					<Field name='username' rules={[nameRules]}>
// 						<Input placeholder='input UR Username' />
// 					</Field>
// 					<Field name='password' rules={[passwordRules]}>
// 						<Input placeholder='input UR Password' />
// 					</Field>
// 					<button>Submit</button>
// 				</Form>
// 			</div>
// 		);
// 	}
// }
