import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      etudiant: {
        id: 1,
        nom: "",
        prenom: "",
        tele: "",
        genre: "",
      },
      list_etudiant: [],
      old_etudiant: "",
      removed_etudiant: [],
    };
  }
  handleChange = (e) => {
    this.setState({
      etudiant: {
        ...this.state.etudiant,
        [e.target.name]: e.target.value,
      },
    });
  };
  add = (e) => {
    e.preventDefault();
    const new_etudiant = this.state.etudiant;
    e.target.reset();
    return this.setState({
      list_etudiant: [...this.state.list_etudiant, new_etudiant],
      etudiant: { ...this.state.etudiant, id: this.state.etudiant.id + 1 },
    });
  };

  save = (e) => {
    e.preventDefault();
    const update_etudiant =
      this.state.etudiant.id - 1 === this.state.old_etudiant.id
        ? this.state.etudiant
        : this.state.old_etudiant;
    return this.setState({
      list_etudiant: [
        ...this.state.list_etudiant.filter(
          (etd) => etd.id !== this.state.old_etudiant.id
        ),
        update_etudiant,
      ],
      old_etudiant: "",
    });
  };

  render() {
    const { list_etudiant, old_etudiant, removed_etudiant } = this.state;
    const display_list = list_etudiant.filter(
      (etd) => !removed_etudiant.includes(etd.id)
    );
    return (
      <div>
        <fieldset>
          <legend>Contrat messager</legend>
          <form onSubmit={this.add}>
            <table>
              <tbody>
                <tr>
                  <td>Nom:</td>
                  <td>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      placeholder="entrez votre nom"
                      name="nom"
                      defaultValue={old_etudiant.nom}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Prénom :</td>
                  <td>
                    <input
                      type="text"
                      onChange={this.handleChange}
                      name="prenom"
                      placeholder="entrez votre prénom"
                      defaultValue={old_etudiant.prenom}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Télé :</td>
                  <td>
                    <input
                      type="number"
                      onChange={this.handleChange}
                      name="tele"
                      placeholder="entrez votre tele"
                      defaultValue={old_etudiant.tele}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Genre:</label>
                  </td>
                  <td>
                    <input
                      onChange={this.handleChange}
                      name="genre"
                      value="femme"
                      type="radio"
                      defaultChecked={
                        old_etudiant.genre === "femme" ? "checked" : ""
                      }
                    />
                    <span>F</span>
                  </td>
                  <td>
                    <input
                      onChange={this.handleChange}
                      name="genre"
                      value="homme"
                      type="radio"
                      defaultChecked={
                        old_etudiant.genre === "homme" ? "checked" : ""
                      }
                    />
                    <span>M</span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    {!old_etudiant && <button type="submit">Add</button>}
                    {old_etudiant && <button onClick={this.save}>Save</button>}
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </fieldset>

        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Tel</th>
              <th>genre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {display_list &&
              display_list.map((etd) => (
                <tr key={etd.id}>
                  <td>{etd.nom}</td>
                  <td>{etd.prenom}</td>
                  <td>{etd.tele}</td>
                  <td>{etd.genre}</td>
                  <td>
                    <button
                      onClick={() => this.setState({ old_etudiant: etd })}
                    >
                      Editer
                    </button>
                    <button
                      onClick={() =>
                        this.setState({
                          removed_etudiant: [
                            ...this.state.removed_etudiant,
                            etd.id,
                          ],
                        })
                      }
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
