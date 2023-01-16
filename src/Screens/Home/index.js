import React, { useState } from "react";
import FlatList from "flatlist-react";

import { HomeWrapper } from "./styles";
import { fetchGithubLists } from "../../Network/WorkSpaceAPICalls";

const Home = () => {
  const [drpOption, setDrpOption] = useState(undefined);

  const handleSearch = async (e) => {
    const searchText = e.target.value;
    if (searchText.length >= 3) {
      const formData = {
        page: 1,
        search: searchText,
        type: "repositories",
      };
      const res = await fetchGithubLists(formData);
      console.log(res);
    }
  };

  const dataList = [
    {
      username: "maulik",
      profile: "https://avatars.githubusercontent.com/u/45980?v=4",
      repo_url: "https://github.com/maulik",
    },
    {
      username: "dmaulikr",
      profile: "https://avatars.githubusercontent.com/u/22164670?v=4",
      repo_url: "https://github.com/dmaulikr",
    },
    {
      username: "MaulikBhatt7",
      profile: "https://avatars.githubusercontent.com/u/101645973?v=4",
      repo_url: "https://github.com/MaulikBhatt7",
    },
    {
      username: "Maulikchhabra",
      profile: "https://avatars.githubusercontent.com/u/46771434?v=4",
      repo_url: "https://github.com/Maulikchhabra",
    },
    {
      username: "maulikdadhaniya",
      profile: "https://avatars.githubusercontent.com/u/28499276?v=4",
      repo_url: "https://github.com/maulikdadhaniya",
    },
    {
      username: "maulikmmodi",
      profile: "https://avatars.githubusercontent.com/u/12855612?v=4",
      repo_url: "https://github.com/maulikmmodi",
    },
    {
      username: "mauliksoneji",
      profile: "https://avatars.githubusercontent.com/u/5520612?v=4",
      repo_url: "https://github.com/mauliksoneji",
    },
    {
      username: "Romit-Maulik",
      profile: "https://avatars.githubusercontent.com/u/12647892?v=4",
      repo_url: "https://github.com/Romit-Maulik",
    },
    {
      username: "maulikkamdar",
      profile: "https://avatars.githubusercontent.com/u/559342?v=4",
      repo_url: "https://github.com/maulikkamdar",
    },
    {
      username: "maulikjs",
      profile: "https://avatars.githubusercontent.com/u/22432723?v=4",
      repo_url: "https://github.com/maulikjs",
    },
    {
      username: "Maulik176",
      profile: "https://avatars.githubusercontent.com/u/80736633?v=4",
      repo_url: "https://github.com/Maulik176",
    },
    {
      username: "maulikpipaliya",
      profile: "https://avatars.githubusercontent.com/u/29562938?v=4",
      repo_url: "https://github.com/maulikpipaliya",
    },
    {
      username: "mauliksharma",
      profile: "https://avatars.githubusercontent.com/u/22904305?v=4",
      repo_url: "https://github.com/mauliksharma",
    },
    {
      username: "ganganimaulik",
      profile: "https://avatars.githubusercontent.com/u/10296400?v=4",
      repo_url: "https://github.com/ganganimaulik",
    },
    {
      username: "mshah87",
      profile: "https://avatars.githubusercontent.com/u/25930488?v=4",
      repo_url: "https://github.com/mshah87",
    },
    {
      username: "MaulikRaviya",
      profile: "https://avatars.githubusercontent.com/u/16777791?v=4",
      repo_url: "https://github.com/MaulikRaviya",
    },
    {
      username: "maulikdesai21",
      profile: "https://avatars.githubusercontent.com/u/14810553?v=4",
      repo_url: "https://github.com/maulikdesai21",
    },
    {
      username: "maulik9898",
      profile: "https://avatars.githubusercontent.com/u/21076623?v=4",
      repo_url: "https://github.com/maulik9898",
    },
    {
      username: "maulikchavda",
      profile: "https://avatars.githubusercontent.com/u/44502272?v=4",
      repo_url: "https://github.com/maulikchavda",
    },
    {
      username: "Maulik747",
      profile: "https://avatars.githubusercontent.com/u/52270137?v=4",
      repo_url: "https://github.com/Maulik747",
    },
    {
      username: "mauliknshah",
      profile: "https://avatars.githubusercontent.com/u/12565730?v=4",
      repo_url: "https://github.com/mauliknshah",
    },
    {
      username: "ermauliks",
      profile: "https://avatars.githubusercontent.com/u/3040988?v=4",
      repo_url: "https://github.com/ermauliks",
    },
    {
      username: "maulikchevli",
      profile: "https://avatars.githubusercontent.com/u/28591845?v=4",
      repo_url: "https://github.com/maulikchevli",
    },
    {
      username: "maulik96",
      profile: "https://avatars.githubusercontent.com/u/16682366?v=4",
      repo_url: "https://github.com/maulik96",
    },
    {
      username: "MaulikGohil",
      profile: "https://avatars.githubusercontent.com/u/9635957?v=4",
      repo_url: "https://github.com/MaulikGohil",
    },
    {
      username: "maulik-p",
      profile: "https://avatars.githubusercontent.com/u/29299120?v=4",
      repo_url: "https://github.com/maulik-p",
    },
    {
      username: "MaulikVarshney",
      profile: "https://avatars.githubusercontent.com/u/46424707?v=4",
      repo_url: "https://github.com/MaulikVarshney",
    },
    {
      username: "maulikaluthra",
      profile: "https://avatars.githubusercontent.com/u/56387512?v=4",
      repo_url: "https://github.com/maulikaluthra",
    },
    {
      username: "Maulikpatell",
      profile: "https://avatars.githubusercontent.com/u/69646201?v=4",
      repo_url: "https://github.com/Maulikpatell",
    },
    {
      username: "maulikhirani",
      profile: "https://avatars.githubusercontent.com/u/25861055?v=4",
      repo_url: "https://github.com/maulikhirani",
    },
  ];
  const data = [
    {
      username: "maupatel",
      profile: "https://avatars.githubusercontent.com/u/21225464?v=4",
      repo_url: "https://api.github.com/users/maupatel",
      stargazers_count: 0,
      full_name: "maupatel/MauP",
    },
    {
      username: "maulikmap",
      profile: "https://avatars.githubusercontent.com/u/54107177?v=4",
      repo_url: "https://api.github.com/users/maulikmap",
      stargazers_count: 0,
      full_name: "maulikmap/maulikmap.github.io",
    },
    {
      username: "IAmMaulik",
      profile: "https://avatars.githubusercontent.com/u/71862933?v=4",
      repo_url: "https://api.github.com/users/IAmMaulik",
      stargazers_count: 2,
      full_name: "IAmMaulik/IAmMaulik",
    },
    {
      username: "Maulik176",
      profile: "https://avatars.githubusercontent.com/u/80736633?v=4",
      repo_url: "https://api.github.com/users/Maulik176",
      stargazers_count: 2,
      full_name: "Maulik176/Maulik_Leetcode",
    },
    {
      username: "maulik-2412",
      profile: "https://avatars.githubusercontent.com/u/104821555?v=4",
      repo_url: "https://api.github.com/users/maulik-2412",
      stargazers_count: 2,
      full_name: "maulik-2412/maulik-2412",
    },
    {
      username: "maulikl",
      profile: "https://avatars.githubusercontent.com/u/6708718?v=4",
      repo_url: "https://api.github.com/users/maulikl",
      stargazers_count: 0,
      full_name: "maulikl/rwrredesign",
    },
    {
      username: "immaulik",
      profile: "https://avatars.githubusercontent.com/u/50351567?v=4",
      repo_url: "https://api.github.com/users/immaulik",
      stargazers_count: 1,
      full_name: "immaulik/immaulik",
    },
    {
      username: "crowdbotics-users",
      profile: "https://avatars.githubusercontent.com/u/37306870?v=4",
      repo_url: "https://api.github.com/users/crowdbotics-users",
      stargazers_count: 0,
      full_name: "crowdbotics-users/maulik127gmailcom-maulik12-714",
    },
    {
      username: "maulik9211",
      profile: "https://avatars.githubusercontent.com/u/40969469?v=4",
      repo_url: "https://api.github.com/users/maulik9211",
      stargazers_count: 0,
      full_name: "maulik9211/maulik9211",
    },
    {
      username: "maulikshah1910",
      profile: "https://avatars.githubusercontent.com/u/16269668?v=4",
      repo_url: "https://api.github.com/users/maulikshah1910",
      stargazers_count: 0,
      full_name: "maulikshah1910/maulikshah1910",
    },
    {
      username: "maulik120",
      profile: "https://avatars.githubusercontent.com/u/6626159?v=4",
      repo_url: "https://api.github.com/users/maulik120",
      stargazers_count: 0,
      full_name: "maulik120/maulik120",
    },
    {
      username: "maulikanques",
      profile: "https://avatars.githubusercontent.com/u/49016447?v=4",
      repo_url: "https://api.github.com/users/maulikanques",
      stargazers_count: 0,
      full_name: "maulikanques/payumoneyplugin",
    },
    {
      username: "Maulik176",
      profile: "https://avatars.githubusercontent.com/u/80736633?v=4",
      repo_url: "https://api.github.com/users/Maulik176",
      stargazers_count: 0,
      full_name: "Maulik176/Maulik176-",
    },
    {
      username: "maulikpatel890",
      profile: "https://avatars.githubusercontent.com/u/45584539?v=4",
      repo_url: "https://api.github.com/users/maulikpatel890",
      stargazers_count: 0,
      full_name: "maulikpatel890/maulikpatel890",
    },
    {
      username: "Maulik2040",
      profile: "https://avatars.githubusercontent.com/u/69782995?v=4",
      repo_url: "https://api.github.com/users/Maulik2040",
      stargazers_count: 0,
      full_name: "Maulik2040/Maulik2040",
    },
    {
      username: "maulik50",
      profile: "https://avatars.githubusercontent.com/u/72292968?v=4",
      repo_url: "https://api.github.com/users/maulik50",
      stargazers_count: 0,
      full_name: "maulik50/maulik50",
    },
    {
      username: "maulik6359",
      profile: "https://avatars.githubusercontent.com/u/109409741?v=4",
      repo_url: "https://api.github.com/users/maulik6359",
      stargazers_count: 0,
      full_name: "maulik6359/maulik6359",
    },
    {
      username: "maulik1001",
      profile: "https://avatars.githubusercontent.com/u/58248023?v=4",
      repo_url: "https://api.github.com/users/maulik1001",
      stargazers_count: 0,
      full_name: "maulik1001/maulik",
    },
    {
      username: "maulik50",
      profile: "https://avatars.githubusercontent.com/u/72292968?v=4",
      repo_url: "https://api.github.com/users/maulik50",
      stargazers_count: 0,
      full_name: "maulik50/maulik",
    },
    {
      username: "ImMark41",
      profile: "https://avatars.githubusercontent.com/u/48307043?v=4",
      repo_url: "https://api.github.com/users/ImMark41",
      stargazers_count: 0,
      full_name: "ImMark41/Maulik",
    },
    {
      username: "MaulikBamania",
      profile: "https://avatars.githubusercontent.com/u/23625783?v=4",
      repo_url: "https://api.github.com/users/MaulikBamania",
      stargazers_count: 0,
      full_name: "MaulikBamania/MaulikApp",
    },
    {
      username: "mauliksoneji2",
      profile: "https://avatars.githubusercontent.com/u/75558150?v=4",
      repo_url: "https://api.github.com/users/mauliksoneji2",
      stargazers_count: 0,
      full_name: "mauliksoneji2/mauliksoneji2",
    },
    {
      username: "maulik85",
      profile: "https://avatars.githubusercontent.com/u/20830176?v=4",
      repo_url: "https://api.github.com/users/maulik85",
      stargazers_count: 0,
      full_name: "maulik85/maulik85",
    },
    {
      username: "maulik124",
      profile: "https://avatars.githubusercontent.com/u/53787443?v=4",
      repo_url: "https://api.github.com/users/maulik124",
      stargazers_count: 0,
      full_name: "maulik124/maulik124",
    },
    {
      username: "MaulikPI",
      profile: "https://avatars.githubusercontent.com/u/88178427?v=4",
      repo_url: "https://api.github.com/users/MaulikPI",
      stargazers_count: 0,
      full_name: "MaulikPI/MaulikPI",
    },
    {
      username: "maulikdesai21",
      profile: "https://avatars.githubusercontent.com/u/14810553?v=4",
      repo_url: "https://api.github.com/users/maulikdesai21",
      stargazers_count: 0,
      full_name: "maulikdesai21/maulikdesai21",
    },
    {
      username: "maulik8899",
      profile: "https://avatars.githubusercontent.com/u/104369783?v=4",
      repo_url: "https://api.github.com/users/maulik8899",
      stargazers_count: 0,
      full_name: "maulik8899/maulik8899",
    },
    {
      username: "maulikvaghela10",
      profile: "https://avatars.githubusercontent.com/u/97874867?v=4",
      repo_url: "https://api.github.com/users/maulikvaghela10",
      stargazers_count: 0,
      full_name: "maulikvaghela10/maulikvaghela10",
    },
    {
      username: "MaulikBhalani",
      profile: "https://avatars.githubusercontent.com/u/75408960?v=4",
      repo_url: "https://api.github.com/users/MaulikBhalani",
      stargazers_count: 1,
      full_name: "MaulikBhalani/MaulikBhalani",
    },
    {
      username: "maulikpatel30",
      profile: "https://avatars.githubusercontent.com/u/98230597?v=4",
      repo_url: "https://api.github.com/users/maulikpatel30",
      stargazers_count: 0,
      full_name: "maulikpatel30/maulikpatel30",
    },
  ];

  const onChangeOption = (e) => {
    setDrpOption(e.target.value);
  };

  return (
    <HomeWrapper>
      <div>
        <form className="form-container">
          <div className="text-container">
            <h3>GitHub Searcher</h3>
            <p className="sub-text">Search users or repositories below</p>
          </div>
          <input
            className="input-box"
            type="text"
            name="name"
            placeholder="Start typing to search .."
            onChange={handleSearch}
          />
          <select className="drp-box" onChange={onChangeOption}>
            <option selected value="user">
              Users
            </option>
            <option value="repositories">Repositories</option>
            <option value="issues">Issues</option>
          </select>
        </form>

        {data.length > 0 ? (
          <div className="data-container">
            <FlatList
              list={drpOption === "repositories" ? data : dataList}
              key={(item, idx) => item.username + idx}
              renderItem={(item, idx) => {
                return (
                  <div className="card">
                    {drpOption === "repositories" ? (
                      <>
                        <p>{"Name: " + item.full_name}</p>
                        <p>{"Author: " + item.username}</p>
                        <p>{"stars: " + item.stargazers_count}</p>
                      </>
                    ) : (
                      <>
                        <img src={{ uri: item.profile }} />
                        <p>{"Author: " + item.username}</p>
                        <a href={item.repo_url} target="_blank">
                          team
                        </a>
                      </>
                    )}
                  </div>
                );
              }}
              renderWhenEmpty={() => <div>List is empty!</div>}
              displayGrid
              minColumnWidth="260px"
              gridGap="80px"
            />
          </div>
        ) : null}
      </div>
    </HomeWrapper>
  );
};

export default Home;
