import os
from sklearn.metrics.pairwise import cosine_similarity


model_name="bert-base-nli-mean-tokens"

cwd=os.getcwd()
print("The current working directory is:",cwd)

dir_list=[]

#The os module is used to interact with the operating system
#Here we are going to use it for listing all the files4
_path = "C:/Users/Bhaskar/Desktop/abstracts"
dir_list = os.listdir(_path) 

print("The directory list is",dir_list)

files=[]

for filename in os.listdir(_path):
   with open(os.path.join(_path, filename), 'r') as f:
    var=str(f.read().lower())
    files.append(var)

print(files)


from sentence_transformers import SentenceTransformer

model=SentenceTransformer(model_name)

sentence_vecs=model.encode(files)

print(sentence_vecs)

print(sentence_vecs.shape)

print(cosine_similarity([sentence_vecs[0]],sentence_vecs[1:]))

