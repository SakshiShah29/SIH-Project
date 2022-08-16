import os
from sklearn.metrics.pairwise import cosine_similarity


model_name="bert-base-nli-mean-tokens"

cwd=os.getcwd()
# print("The current working directory is:",cwd)
dir_list=[]

#The os module is used to interact with the operating system
#Here we are going to use it for listing all the files4
desktop = os.path.join(os.path.join(os.environ['USERPROFILE']), 'Desktop') 
# print(desktop)
_path = _path = desktop+"/abstracts"
dir_list = os.listdir(_path) 

# print("The directory list is",dir_list)

files=[]

for filename in os.listdir(_path):
   with open(os.path.join(_path, filename), 'r') as f:
    var=str(f.read().lower())
    files.append(var)

# print(files)


from sentence_transformers import SentenceTransformer

model=SentenceTransformer(model_name)

sentence_vecs=model.encode(files)

def similarity(doc1,doc2):
    return cosine_similarity([doc1,doc2])

vectors_final=list(zip(dir_list,sentence_vecs))



# text_file_to_check=""
# vector_to_check=[]

# # print(sentence_vecs)

# # print(sentence_vecs.shape)

# finalans=cosine_similarity([sentence_vecs[0]],sentence_vecs[1:])
finalans=[]
def check_plagiarism():
    text_file_to_check=vectors_final[0][0]
    vectors_to_check=vectors_final[0][1]
#     print(text_file_to_check)
#     print(vectors_to_check)
    
    for i in range(1,len(vectors_final)):
        ans=similarity(vectors_to_check,vectors_final[i][1])[0][1]
        # print(ans)  
        if(ans>=0.70):
            # print("The plagiarism is detected it doesn't make sense to detect anymore")
            break
        else:
             finalans.append(ans)  

check_plagiarism()

# print(len(vectors_final))
# print("The final array that we got is:")
if(len(finalans)==len(vectors_final)-1):
    print("0")

else:
    print("1")





