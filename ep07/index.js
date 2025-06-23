//js is single thread means it executes the code line by line -> js does one task at a time(no multitasking)
//js is synschronus programming language-> one after the other
//js doesnot wait for anyone, it executes the code line by line

//if you want ot wait for the data to come, we use async/await
//even we can solve it using promises.
//but for react -> every developers use async/await (industry level)

//API - Application Programming Interface

const gitHubAPI = "https://api.github.com/users/rranjan22";

const fetchData = async () => {
  // const response = await fetch(gitHubAPI);
  // const jsonData = await response.json();
  // console.log(jsonData);
  // console.log(jsonData.name);
  // console.log(jsonData.bio);
  // console.log(jsonData.twitter_username);


  //for try catch finally!!
  try {
    const response = await fetch(gitHubAPI);
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData.name);
    console.log(jsonData.bio);
    console.log(jsonData.twitter_username);
  } catch (error) {
    console.error(object);
  } finally {
    console.log("It always runs, no matter what!!");
  }
};

fetchData();
