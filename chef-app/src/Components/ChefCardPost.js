const ChefCardPost = props => {
    const { Content } = Layout;
    function Homepage(props) {
      const handleSubmit = e => {
        e.preventDefault(props);
        const baseURL =
          'https://lambda-chef-portfolio.herokuapp.com/api/posts/create';
        axiosWithAuth()
          .post(`${baseURL}/posts/create`, { post })
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            props.history.push('/ChefLogin');
          })
          .catch(err => {
            console.log(err);
          });
      };
      return <div className='ChefCard'></div>;
    }
   };
   export default ChefCardPost;