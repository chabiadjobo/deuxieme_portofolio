import os

def lister_contenu_dossier(dossier, indentation=0):
    contenu_dossier = []
    for element in os.listdir(dossier):
        chemin_complet = os.path.join(dossier, element)
        if os.path.isfile(chemin_complet):
            contenu_dossier.append(f"{'  ' * indentation}Fichier: {element}")
        elif os.path.isdir(chemin_complet):
            contenu_dossier.append(f"{'  ' * indentation}Dossier: {element}")
            contenu_dossier.extend(lister_contenu_dossier(chemin_complet, indentation + 1))
        else:
            contenu_dossier.append(f"{'  ' * indentation}Autre: {element}")
    return contenu_dossier

# Remplacez 'chemin/du/dossier' par le chemin absolu du dossier dont vous souhaitez récupérer l'architecture
chemin_dossier = '/home/ayedesso/Travail/IA School/Alternance et stage/Projet_Portfolio/portfolio-main/'

if os.path.exists(chemin_dossier):
    contenu = lister_contenu_dossier(chemin_dossier)
    for element in contenu:
        print(element)
else:
    print(f"Le dossier '{chemin_dossier}' n'existe pas.")


